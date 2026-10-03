/**
 * @source https://amantle.dev/registry/blocks/faq-accordion
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/registry/ui/accordion";

export function FaqAccordion() {
  const faqs = [
    {
      q: "Чем AMANTLE UI отличается от стандартных библиотек компонентов?",
      a: "AMANTLE UI распространяется по модели Code Ownership: вы копируете исходный код прямо в проект через CLI, а не подключаете его как закрытый npm-пакет. Это даёт 100% контроль над кодовой базой.",
    },
    {
      q: "Как работает интеграция с Cursor и Windsurf?",
      a: "В проект встроен MCP-сервер, который предоставляет AI-агенту доступ к инструментам поиска компонентов, чтения схем токенов и контекстной генерации шаблонов прямо в редакторе.",
    },
    {
      q: "Что такое аудит Provenance?",
      a: "Каждый файл в реестре имеет строгую шапку с метаданными о происхождении (@source, @author, @license, @modified). Сборщик реестра гарантирует, что ни один файл без лицензии не попадёт в продакшн.",
    },
    {
      q: "Как добавить компонент в существующий проект Next.js?",
      a: "Используйте стандартную команду npx shadcn add с URL нашего реестра, например: npx shadcn add http://localhost:3000/r/button.json.",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Часто задаваемые вопросы</h2>
          <p className="mt-3 text-muted-foreground">Ответы на популярные технические вопросы о системе</p>
        </div>
        <Accordion type="single" defaultValue="item-0">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.q} value={`item-${index}`}>
              <AccordionTrigger className="text-base font-semibold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FaqAccordion;
