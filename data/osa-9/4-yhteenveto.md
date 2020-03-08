---
path: '/osa-9/5-yhteenveto'
title: 'Yhteenveto'
hidden: true
---

Kurssin yhdeksännessä osassa tutustuttiin muutamaan olio-ohjelmoinnin piirteeseen -- perintään ja olioiden monimuotoisuuteen, joiden lisäksi tutustuimme myös rajapintoihin. Koska jokainen olio on oman tyyppinsä lisäksi Object-tyyppinen, voi ohjelmoinnissa käytettävien kirjastojen (kuten vaikkapa listan tai hajautustaulun) suunnittelija olettaa, että jokaisella oliolla on metodit `toString`, `hashCode`, ja `equals`. Tämän lisäksi, koska jokainen olio voidaan antaa parametrina kaikille niille metodeille ja konstruktoreille, jotka saavat parametrinaan olioon liittyvän luokan tyyppisiä olioita, mitä tahansa luokkia, joita olion luokka on perinyt, tai mitä tahansa rajapintoja, joita olion luokka tai sen perimät luokat ovat toteuttaneet, voidaan ohjelmiin toteuttaa metodeja ja konstruktoreita, jotka käsittelevät hyvin monentyyppisiä olioita. Tämä mahdollistaa muunmuassa ohjelmien laajennettavuuden ja helpottaa ongelma-alueen kuvaamista ja käsittelyä luokkien sekä niistä tehtyjen olioiden avulla.

Vastaa vielä lopuksi seuraavaan yhdeksännen osan osaamistavoitteita tarkastelevaan itsearviointikyselyyn.

<quiz id='4fe2749d-713b-5b7e-a7b5-b7b525e33e7d'></quiz>
