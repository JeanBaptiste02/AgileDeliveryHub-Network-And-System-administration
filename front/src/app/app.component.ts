import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

interface HealthResponse {
  mysql_migrations: string;
  mysql: string;
  // Ajoutez d'autres propriétés au besoin
}

interface Message {
  username: string;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public health: HealthResponse = { mysql_migrations: '', mysql: '' };
  public healthy: string = '';
  public messages: Message[] = [];
  public formError: string = '';
  public errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refreshState();
    this.refreshMessages();
    setInterval(() => {
      this.refreshState();
      this.refreshMessages();
    }, 1000);
  }

  refreshState() {
    this.http
      .get<HealthResponse>(environment.api_endpoint + '/health')
      .subscribe(
        (res: HealthResponse) => {
          this.health = res;
          this.healthy = 'good-job-bro';

          if (!!res.mysql_migrations && res.mysql_migrations !== 'healthy')
            this.healthy = 'not-that-bad';
          if (!!res.mysql && res.mysql !== 'healthy') this.healthy = 'argh';
          this.errorMessage = '';
        },
        (err) => {
          this.health = { mysql_migrations: '', mysql: '' };
          this.healthy = 'argh';
          this.errorMessage = 'Failed to load resource: ' + err.message;
          console.error(err);
        }
      );
  }

  refreshMessages() {
    this.http.get<Message[]>(environment.api_endpoint + '/message').subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      },
      (err) => {
        this.messages = [];
        console.error(err);
      }
    );
  }

  public postMessage(data: { username: string; message: string }) {
    const body = {
      username: data.username,
      message: data.message,
    };
    console.log(body);
    this.http
      .post<Message>(environment.api_endpoint + '/message', body)
      .subscribe(
        () => {
          this.formError = '';
          this.refreshMessages(); // Rafraîchir les messages après l'envoi avec succès
        },
        (err) => {
          this.formError = err.error.message;
          console.error(err);
        }
      );
  }
}
