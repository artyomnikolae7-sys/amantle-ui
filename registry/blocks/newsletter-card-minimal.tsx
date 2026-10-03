/**
 * @source https://amantle.dev/registry/blocks/newsletter-card-minimal
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Mail } from "lucide-react";
import { Input } from "@/registry/ui/input";
import { Button } from "@/registry/ui/button";
import { Card, CardContent } from "@/registry/ui/card";

export function NewsletterCardMinimal() {
  return (
    <Card className="border-border/80 bg-card p-6 sm:p-10 max-w-xl mx-auto">
      <CardContent className="p-0 text-center space-y-4">
        <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Mail className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-foreground">
          Подпишитесь на обновления
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Получайте уведомления о новых компонентах, релизах шаблонов и обновлениях MCP-сервера раз в месяц. Без спама.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2 pt-2">
          <Input
            type="email"
            placeholder="ваш.email@domain.com"
            className="h-10 text-sm"
            required
          />
          <Button type="submit" className="h-10 px-5">
            Подписаться
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default NewsletterCardMinimal;
