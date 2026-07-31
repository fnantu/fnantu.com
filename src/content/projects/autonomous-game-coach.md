---
slug: autonomous-game-coach
number: "01"
title: Otonom Oyun Koçu
summary: Taktiksel oyunlar için GraphRAG + Multi-Agent LLM tabanlı yerel koçluk sistemi.
description: Karmaşık oyunlarda kullanıcının niyetini anlayan, vektör ve grafik veritabanlarından anlık veri çeken, çoklu ajan mimarisiyle stratejik rehberlik sunan yapay zeka sistemi.
tags: Python, TypeScript, LangGraph, Qdrant, KùzuDB, FastAPI, Next.js, Docker
year: "2026"
outcome: SaaS altyapısıyla çalışan prototip
github: https://github.com/fnantu/autonomous-game-coach
---

Geleneksel kural tabanlı oyun asistanlarının aksine bu sistem, kullanıcının niyetini GraphRAG ve Çoklu Ajan mimarisiyle analiz ediyor. Hibrit konteyner yapısı sayesinde LLM motoru GPU'da bare-metal çalışırken, ajanlar ve veritabanları Docker ile izole ediliyor.

Zeka katmanında LangGraph tabanlı durum makinesi kullanılıyor. Yönlendirici şef ajan, Pydantic yapılandırılmış çıktılarla kullanıcı niyetini sınıflandırıp ilgili uzman ajanları tetikliyor. Few-shot prompting ile oyuncu jargonuna uygun kişilik kazandırılmış.

Veri boru hattında ikili RAG mimarisi var: Qdrant'ta vektör hafıza (semantik arama için), KùzuDB'de grafik hafıza (oyun içi ilişkiler için). FastEmbed CPU üzerinde çalışarak VRAM'i meşgul etmiyor. Veri kazıma için MediaWiki REST API'leri kullanılıyor.

Backend FastAPI ve SSE streaming ile, frontend ise Next.js ve Tailwind CSS ile inşa edildi. Clerk ve Stripe entegrasyonlarına hazır SaaS altyapısı.
