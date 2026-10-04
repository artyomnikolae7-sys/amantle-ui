/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Account settings profile page template
 */

"use client";

import * as React from "react";
import { User, Shield, CreditCard, Bell, Save } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Switch } from "@/registry/ui/switch";
import { TabsVertical } from "@/registry/ui/tabs-vertical";

export default function SettingsAccountPage() {
  const [activeTab, setActiveTab] = React.useState("profile");

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="container mx-auto max-w-5xl space-y-8">
        <div className="border-b border-border/80 pb-4">
          <h1 className="text-2xl font-bold">Настройки аккаунта</h1>
          <p className="text-xs text-muted-foreground mt-1">Управляйте личными данными, безопасностью и уведомлениями</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-64 shrink-0">
            <TabsVertical
              activeId={activeTab}
              onChange={setActiveTab}
              items={[
                { id: "profile", label: "Профиль", icon: <User className="h-4 w-4" /> },
                { id: "security", label: "Безопасность", icon: <Shield className="h-4 w-4" /> },
                { id: "billing", label: "Подписка и биллинг", icon: <CreditCard className="h-4 w-4" /> },
                { id: "notifications", label: "Уведомления", icon: <Bell className="h-4 w-4" /> },
              ]}
            />
          </div>

          <div className="flex-1 w-full rounded-2xl border border-border bg-card p-6 shadow-xs space-y-6">
            {activeTab === "profile" && (
              <div className="space-y-4">
                <h2 className="text-base font-bold">Публичный профиль</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1.5">
                    <label className="font-semibold text-muted-foreground">Имя пользователя</label>
                    <Input defaultValue="alex_frontend" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-semibold text-muted-foreground">Email</label>
                    <Input defaultValue="alex@company.com" type="email" />
                  </div>
                </div>
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  <span>Сохранить изменения</span>
                </Button>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-4 text-xs">
                <h2 className="text-base font-bold">Безопасность и пароли</h2>
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div>
                    <span className="font-semibold block text-foreground">Двухфакторная аутентификация (2FA)</span>
                    <span className="text-muted-foreground">Защитите аккаунт с помощью SMS или Authenticator</span>
                  </div>
                  <Switch checked />
                </div>
              </div>
            )}

            {activeTab === "billing" && (
              <div className="space-y-3 text-xs">
                <h2 className="text-base font-bold">Текущий тариф</h2>
                <p className="text-muted-foreground">Вы используете тариф Pro. Следующее списание 1 ноября 2026.</p>
                <Button variant="outline">Управление подпиской</Button>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-3 text-xs">
                <h2 className="text-base font-bold">Email уведомления</h2>
                <p className="text-muted-foreground">Получать дайджест новых компонентов и обновлений безопасности.</p>
                <Switch checked />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
