/**
 * @source https://amantle.dev/registry/blocks/contact-form-split
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Textarea } from "@/registry/ui/textarea";

export function ContactFormSplit() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight">Свяжитесь с нами</h2>
            <p className="text-muted-foreground leading-relaxed">
              Есть вопросы по интеграции MCP, внедрению корпоративной дизайн-системы или предложение по сотрудничеству? Напишите нам.
            </p>
            <div className="space-y-4 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>support@amantle.dev</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Москва, Инновационный центр</span>
              </div>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Имя</label>
                <Input placeholder="Ваше имя" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="email@domain.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Тема сообщения</label>
              <Input placeholder="Внедрение в проект" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Сообщение</label>
              <Textarea placeholder="Расскажите подробнее о вашей задаче..." rows={4} required />
            </div>
            <Button type="submit" className="w-full">Отправить сообщение</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSplit;
