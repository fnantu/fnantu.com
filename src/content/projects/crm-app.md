---
slug: crm-app
number: "04"
title: CRM Platformu
summary: .NET 8 tabanlı cross-platform müşteri ilişkileri yönetimi, şikayet takibi ve RFM analizi sistemi.
description: WinForms ve Avalonia UI arayüzleri, Docker SQL Server veritabanı, gelişmiş lead yönetimi ve müşterileri 10 farklı sadakat segmentine ayıran RFM analiz motoru.
tags: C#, .NET 8, Avalonia UI, WinForms, SQL Server, Docker
year: "2026"
status: Tamamlandı
outcome: Cross-Platform CRM
github: https://github.com/fnantu/crm-app
---

Cross-Platform Müşteri İlişkileri Yönetimi (CRM) uygulaması, şirketlerin müşteri ilişkilerini, potansiyel müşteri adaylarını (Lead) ve şikayet/öneri süreçlerini tek merkezden yönetmesini sağlar.

.NET 8 ile geliştirilen uygulama; Windows ortamında Windows Forms (WinForms), Linux/cross-platform ortamında ise Avalonia UI 11.1 native arayüzü ile esnek çalışma desteği sunar. Veritabanı katmanı Docker üzerinde koşan Microsoft SQL Server 2022 ile izole edilmiştir.

Sistemde entegre bir RFM (Recency — Frequency — Monetary) analiz motoru bulunur. Müşterilerin alışveriş sıklığı, son satın alma tarihi ve harcama tutarları analiz edilerek müşteriler otomatik olarak 10 farklı sadakat segmentine (Şampiyonlar, Sadık Müşteriler, Risk Altındakiler vb.) ayrılır.

Modüler mimaride ComplaintService, SalesService, LeadService ve RFMService katmanları bağımsız olarak çalışarak esnek bir iş mantığı sunar.
