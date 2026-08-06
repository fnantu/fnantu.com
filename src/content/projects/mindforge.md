---
slug: mindforge
number: "03"
title: MindForge
summary: Yapay zeka destekli offline-first not alma, çizim ve görev yönetimi platformu.
description: Avalonia UI (.NET 8) masaüstü + FastAPI/LangGraph AI servisi + TF-IDF vektör arama + ProseMirror/Excalidraw editör ile lokal çalışan, senkronizasyonlu bilgi yönetim sistemi.
tags: C#, .NET, Avalonia UI, Python, FastAPI, LangGraph, TF-IDF, SQLite, Docker
year: "2026"
status: Aktif geliştirme
outcome: MVP tamamlandı
github: https://github.com/fnantu/MindForge
---

MindForge, yapay zeka destekli ve tamamen offline çalışabilen bir kişisel bilgi yönetim platformu. Kullanıcıya yazma, çizim ve sesli notlarını tek bir arayüzde toplayıp yapay zeka ajanlarıyla anlamlandırma imkanı sunuyor.

Platform, .NET 8 ve Avalonia UI ile cross-platform masaüstü uygulaması olarak çalışıyor. WebView tabanlı editör katmanında ProseMirror zengin metin editörü ve Excalidraw canvas çizim aracı bir arada. Ses kaydı için tarayıcı MediaRecorder API'si kullanılıyor.

Yapay zeka katmanı Docker Compose ile konteynerize edilmiş FastAPI servisi üzerinde çalışıyor. LangGraph tabanlı dört AI ajanı mevcut: ses-not dönüşümü (STT), görev çıkarımı (Task Extractor), öncelikli planlama (Planner) ve notlar arası anlamsal bağlantı (Zettelkasten). Vektör arama için Qdrant yerine yerel TF-IDF (scikit-learn) kullanılarak tamamen offline çalışma sağlanıyor.

Veri katmanı offline-first prensibiyle tasarlandı. SQLite lokal veritabanı anında kayıt yaparken, arka planda ChangeTracker ve ConflictResolver ile PostgreSQL remote veritabanına senkronize oluyor. Çakışma durumunda LastWriteWins stratejisi uygulanıyor.
