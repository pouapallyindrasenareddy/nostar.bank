# Nostar Bank Demo

A responsive, fictional banking-style landing page inspired by the supplied visual reference. It uses a distinct **Nostar Bank** identity and does not connect to any bank or financial service.

## Stack
- Java 17
- Spring Boot 3
- Maven
- HTML, CSS and JavaScript
- WAR packaging for deployment to a servlet container

## Run locally
```bash
mvn spring-boot:run
```
Open http://localhost:8080

## Build the WAR
```bash
mvn clean package
```
Output:
```text
target/nostar-bank.war
```

## GitHub Actions
Push this folder to a GitHub repository on the `main` branch. The workflow at `.github/workflows/build-war.yml` builds the WAR and publishes it as an Actions artifact.

## Important
This is a front-end demonstration only. The Login buttons show a demo notice; there is no real authentication, account access, payments, or collection of banking credentials. Do not use this project to impersonate a real financial institution.
