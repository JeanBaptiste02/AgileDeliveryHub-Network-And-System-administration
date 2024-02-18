# AgileDeliveryHub

Ce projet a été réalisé dans le cadre du cours "Network and System Administration" du programme de M1 Master of Sciences à EPITECH.

## Description du Projet:

AgileDeliveryHub accélère la livraison logicielle avec fiabilité, sécurité et scalabilité. Il établit une infrastructure solide pour l'intégration continue (CI) et le déploiement continu (CD) et simplifie les déploiements, tests et surveillance d'un projet.

## Fonctionnalités Principales:

- Configuration des pipelines CI/CD : Implémentation des pipelines CI/CD en utilisant GitLab pour la construction, les tests automatisés et l'emballage des applications.
- Provisionnement de l'Infrastructure : Configuration de serveurs Debian pour MySQL, le frontend et le backend en utilisant Ansible.
- Déploiement des Applications : Utilisation des playbooks Ansible pour déployer et installer les artefacts d'application avec un temps d'arrêt minimal.
- Migration Automatique : Mise en place de mécanismes de migration automatique de schéma de base de données pour garantir des mises à jour d'application fluides.
- Mécanisme de Revenir en Arrière : Permettre un retour rapide aux versions précédentes de l'application en cas de régression, avec un temps de retour cible inférieur à 3 minutes.
- Mesures de Sécurité : Garantir les meilleures pratiques de sécurité, notamment la protection par mot de passe, le chiffrement et le contrôle d'accès, pour protéger les données sensibles.
- Vagrant : Configuration et création de la machine virtuelle de manière plus rapide.

## Livrables du Projet:

- Configuration d'un serveur GitLab en ligne pour CI/CD.
- Configuration de trois serveurs Debian pour MySQL, le frontend et le backend.
- Dépôt Git hébergé sur GitLab contenant des pipelines CI/CD, des playbooks Ansible et des scripts associés.

## Étapes de Démonstration:

- Préparation de l'Infrastructure : Configuration et installation des serveurs à l'aide d'Ansible depuis le terminal.
- CI : Construction, test et empaquetage des applications sur GitLab.
- CD : Lancement du déploiement de chaque application à l'aide d'Ansible depuis GitLab.
- Accès aux Applications : Vérification de l'accessibilité des applications frontend et backend.

## Technologies Frontend et Backend:

- Frontend : Angular
- Backend : PHP Laravel
