/**
 * @source https://amantle.dev/registry/blocks/login-card-floating
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/ui/card";

export function LoginCardFloating() {
  return (
    <Card className="w-full max-w-sm mx-auto shadow-2xl border-border">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Вход в систему</CardTitle>
        <CardDescription>
          Введите адрес электронной почты для доступа к аккаунту
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium leading-none">Email</label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium leading-none">Пароль</label>
            <a href="#" className="text-xs text-muted-foreground hover:underline">
              Забыли пароль?
            </a>
          </div>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button className="w-full">Войти</Button>
        <p className="text-center text-xs text-muted-foreground">
          Нет аккаунта?{" "}
          <a href="#" className="text-primary underline-offset-4 hover:underline">
            Зарегистрироваться
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}

export default LoginCardFloating;
