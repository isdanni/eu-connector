# EU-Connector

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

DeveloperWeek Europe Hackathon 2023

## Inspiration

EU-Connector is a non-profit organization(NGO) that provides free, collaborative resources 24/7 to help immigrants, asylum seekers, and refugees thrive in the E.U.

Such groups often face significant challenges when it comes to integrating into their new communities. These challenges can include language barriers, difficulty accessing employment, limited access to education and healthcare, discrimination and prejudice, and trauma from their experiences before and during their journey to the new country.  Europe is a continent with a diverse cultural and linguistic heritage, which means it's harder for people like refugees and asylum seekers to integrate into society instantly. 

Providing better support to them is not only a humanitarian imperative but also a swisemart economic investment. Helping them integrate into their new communities can promote social cohesion, economic growth, and cultural diversity.

## What it does

EU-Connector is a cross-platform app that is to help immigrants and refugees find resources and services in within EU.

When you visit the website/app, you are presented with a search bar where you can enter a city, state, or ZIP code, and the app will provide a list of resources and services that are available in your local area. These resources are organized into categories such as housing, education, healthcare, and legal services.

For example, if you search for "Berlin, Germany", the app will show you a list of organizations and resources in that city that offer services such as affordable housing, German/English language classes, healthcare clinics, job training programs, and legal assistance.

### Functionalities

- Search Local Resources
- Geolocation/Geo-tagging
- Submit Information & Resources in Real-time
- Saved Posts
- Discussion Board

## How we built it


### Tech Stack

This project chooses to use **Ionic**, **Angular**, and **Capacitor** to build a cross-platform mobile application for its performance and compatibility(so it runs on both **Android** and **iOS** platforms, as well as **web browsers**). It also has a large collection of native features of mobile devices such as geolocation, which is essential for the implementation of this app. Capacitor allows your web application to run natively on mobile devices, which results in better performance and faster load times compared to traditional applications.

A list of technologies used:

- [Ionic/Angular](https://ionicframework.com/)
- [Google Maps API key](https://developers.google.com/maps)
- JavaScript Maps API
- [Capacitor](https://capacitorjs.com/)

### Getting Started

1. To install this project, clone the repository using:

```
git clone git@github.com:isdanni/eu-connector.git eu-connector
```

2. Install packages:

```
npm install

# If there are certain dependency error, use it with --force
npm install --force
```

3. Run locally, and open [local host](http://localhost:8101)(port number may change) in your web browser:

```
ionic serve
```


## Challenges we ran into

- Fast development and iteration 
- Successful integration of Google Maps using Capacitor 
- Cross-platform(Andoird & iOS) display

## Accomplishments that we're proud of

A fully-functional coss-platform demo app with complete features.

## What we learned

- Innovation
- Problem-solving
- Technical skills
- Time management


## What's next for EU-Connector

We will continue to develop features for eu-connector to become a valuable tool for those who need and seek related information.
