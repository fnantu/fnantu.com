---
slug: document-ai
number: "03"
title: Document AI Assistant
summary: Teknik dokümanları sorgulanabilir hale getiren yapay zeka aracı.
description: RAG (Retrieval-Augmented Generation) kullanarak dokümanlardan anlam çıkaran ve sorulara yanıt verebilen bir sistem.
tags: LLM, RAG, TypeScript
year: "2025"
outcome: Daha hızlı bilgi erişimi
github: https://github.com/fnantu/document-ai
---

Dağınık teknik dokümanları vektör veritabanına yükleyip doğal dil sorgularıyla arama yapılabilen bir asistan geliştirdim. Sistem, sorulan soruyla en ilgili doküman parçalarını bulup LLM aracılığıyla anlamlı yanıtlar üretiyor.

Özellikle embedding kalitesinin ve chunk boyutunun sonuçları nasıl etkilediğini test etmek ilginçti. Küçük chunk'lar daha isabetli ama bağlamı kaybedebiliyor; büyük chunk'lar ise tam tersi.
