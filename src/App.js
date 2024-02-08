// App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Meram Tarih Kulübü Gençlere Tarih Bilinci Projesi</h1>
        <p>
          Meram Tarih Kulübü olarak gençlerimize tarihimizi keşfetmeleri için ilham verici bir
          proje sunuyoruz. Geçmişimizi anlamak ve tarih bilincini
          artırmak amacıyla bu projede bir araya geliyoruz.
        </p>
      </header>
      <section className="app-content">
        <h2>Neden Bu Projeye Katılmalısınız?</h2>
        <p>
          Tarih, bir toplumun kimliğini şekillendiren önemli bir unsurdur. Bu proje, gençlerimizi
          tarihle buluşturarak geçmişimizden ders çıkarmalarına ve Konya'nın geçmişini
          tanımalarına yardımcı olmayı amaçlamaktadır.
        </p>
        <p>
          Projemize katılarak tarihle ilgili interaktif içeriklerle tanışacak, etkileşimli
          aktivitelerde bulunacak ve tarih bilincinizi güçlendireceksiniz.
        </p>
      </section>
      <section className="app-features">
        <h2>Projemizin Özellikleri</h2>
        <ul>
          <li>Geçmişten Günümüze Türk Tarihi Dersleri</li>
          <li> Müze Gezileri</li>
          <li>Online Tarih Yarışmaları ve Etkinlikler</li>
          <li>Günlük Tarih Bilgisi Soruları</li>
          <li>Genç Tarihçilerle Söyleşiler ve Paneller</li>
        </ul>
      </section>
      <section className="app-join">
        <h2>Projemize Katılın!</h2>
        <p>
          Meram Tarih Kulübü Gençlere Tarih Bilinci Projesi'ne katılarak tarihle dolu bir
          serüvene adım atın. Siz de geçmişimizi keşfetmek, yeni arkadaşlar edinmek ve
          tarih bilincinizi artırmak için projemize dahil olun!
        </p>
        <button className="join-button">Projeye Katıl</button>
      </section>
      <footer className="app-footer">
        <p>
          Emiir Talha Karadeniz © 2024 | Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
}

export default App;


// App.js

import React from 'react';
import './App.css';

function App() {
  const redirectToMeramWebsite = () => {
    window.location.href = 'https://www.meram.bel.tr';
  };

  return (
    <div className="app">
      <header className="app-header">
        <nav className="navbar">
          <ul>
            <li><a href="/">Ana Sayfa</a></li>
            <li><a href="/">Tarih Rehberi</a></li>
            <li><a href="/">Sanal Müze</a></li>
            <li><a href="/">Yarışmalar</a></li>
            <li><a href="/">Söyleşiler</a></li>
            <li><button className="join-button" onClick={redirectToMeramWebsite}>Projeye Katıl</button></li>
          </ul>
        </nav>
       
