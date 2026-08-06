---
slug: oee-monitor
number: "02"
title: Endüstriyel OEE Monitor
summary: Gerçek zamanlı sensör verilerini işleyen, RabbitMQ, TimescaleDB, KùzuDB topolojisi ve AI ajanı içeren OEE izleme sistemi.
description: Endüstriyel tesisler için asenkron telemetri akışı, makine bağımlılık topolojisi, otomatik anomali tespiti ve kestirimci bakım önerileri sunan mikroservis tabanlı izleme altyapısı.
tags: Python, FastAPI, TimescaleDB, RabbitMQ, KùzuDB, Docker, ECharts, Grafana
year: "2026"
status: Aktif
outcome: Tamamlandı
github: https://github.com/fnantu/oee-monitor
---

Endüstriyel OEE & Telemetri İzleme Sistemi, fabrika sahasından gelen yüksek frekanslı sensör verilerini ve duruş kayıtlarını gerçek zamanlı işlemek üzere tasarlanmış mikroservis mimarisidir.

Veri akış boru hattında RabbitMQ asenkron mesaj kuyruğu kullanılarak API Gateway'in yük altında non-blocking (HTTP 202) çalışması sağlanmıştır. Sensör verileri TimescaleDB (PostgreSQL 16 hypertable) üzerinde zaman serisi formatında saklanır.

Fabrika fiziki bağımlılıkları ve makine ilişkileri KùzuDB grafik veritabanı ile modellenerek kök neden ve etki analizleri (impact analysis) gerçekleştirilir. Multi-Agent AI katmanı, zaman serisi verileri üzerinden anomali tespiti yaparak kestirimci bakım uyarıları üretir.

İstemci tarafında Nginx ve SVG tabanlı ECharts ile hazırlanan canlı izleme panosu WebSocket yayını üzerinden anlık güncellenir. Ayrıca Grafana ve Power BI entegrasyonları mevcuttur.
