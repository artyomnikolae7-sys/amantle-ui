/**
 * @source https://ui.shadcn.com/docs/components/form
 * @author AMANTLE UI Design Engineering
 * @license MIT
 * @modified Accessible Form System with real-time validation, password strength meter, aria-live announcements, and tactile feedback
 */

"use client";

import * as React from "react";
import { User, Mail, Lock, Check, AlertCircle, Loader2, ShieldCheck, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";

export interface FormSystemAccessibleProps extends React.HTMLAttributes<HTMLDivElement> {
  onSuccess?: () => void;
}

export function FormSystemAccessible({
  className,
  onSuccess,
  ...props
}: FormSystemAccessibleProps) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [agreeTerms, setAgreeTerms] = React.useState(false);

  // Touched states
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  // Validations
  const isNameValid = name.trim().length >= 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Password strength calculation
  const passwordStrength = React.useMemo(() => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    return score; // 0..4
  }, [password]);

  const isPasswordValid = passwordStrength >= 3;
  const isFormValid = isNameValid && isEmailValid && isPasswordValid && agreeTerms;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, password: true, terms: true });

    if (!isFormValid) {
      toast.error("Пожалуйста, заполните все обязательные поля корректно");
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsLoading(false);
    setIsSuccess(true);
    toast.success("Регистрация успешно пройдена!");
    onSuccess?.();
  };

  return (
    <div
      className={cn(
        "max-w-md mx-auto rounded-xl border border-border bg-card p-6 sm:p-8 shadow-lg transition-[color,background-color,border-color,box-shadow,transform]",
        className
      )}
      {...props}
    >
      <div className="text-center pb-6 border-b border-border">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-foreground">Создать учётную запись</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          Присоединяйтесь к экосистеме AMANTLE UI за пару кликов
        </p>
      </div>

      {isSuccess ? (
        <div className="py-8 text-center space-y-4" role="status" aria-live="polite">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
            <Check className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-bold text-foreground">Добро пожаловать в систему!</h3>
          <p className="text-xs text-muted-foreground">
            Письмо с подтверждением отправлено на адрес <strong className="text-foreground">{email}</strong>.
          </p>
          <Button
            className="w-full mt-4"
            onClick={() => {
              setIsSuccess(false);
              setName("");
              setEmail("");
              setPassword("");
              setAgreeTerms(false);
              setTouched({});
            }}
          >
            Заполнить заново
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          {/* Full Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="field-name"
              className="block text-xs font-semibold text-foreground"
            >
              Ваше имя <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="field-name"
                type="text"
                placeholder="Иван Петров"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                aria-invalid={touched.name && !isNameValid}
                aria-describedby={touched.name && !isNameValid ? "name-error" : undefined}
                className={cn(
                  "pl-9 h-10 text-sm",
                  touched.name && !isNameValid && "border-rose-500 focus-visible:ring-rose-500"
                )}
              />
            </div>
            {touched.name && !isNameValid && (
              <p id="name-error" className="flex items-center gap-1 text-[11px] text-rose-500" role="alert">
                <AlertCircle className="h-3 w-3" />
                Имя должно содержать не менее 2 символов
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="field-email"
              className="block text-xs font-semibold text-foreground"
            >
              Рабочий Email <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="field-email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                aria-invalid={touched.email && !isEmailValid}
                aria-describedby={touched.email && !isEmailValid ? "email-error" : undefined}
                className={cn(
                  "pl-9 h-10 text-sm",
                  touched.email && !isEmailValid && "border-rose-500 focus-visible:ring-rose-500"
                )}
              />
            </div>
            {touched.email && !isEmailValid && (
              <p id="email-error" className="flex items-center gap-1 text-[11px] text-rose-500" role="alert">
                <AlertCircle className="h-3 w-3" />
                Введите корректный email адрес
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label
              htmlFor="field-password"
              className="block text-xs font-semibold text-foreground"
            >
              Пароль <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="field-password"
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
                aria-invalid={touched.password && !isPasswordValid}
                aria-describedby="password-strength"
                className={cn(
                  "pl-9 h-10 text-sm",
                  touched.password && !isPasswordValid && "border-rose-500 focus-visible:ring-rose-500"
                )}
              />
            </div>

            {/* Password Strength Indicator */}
            {password.length > 0 && (
              <div id="password-strength" className="space-y-1 pt-1">
                <div className="flex gap-1 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full transition-[color,background-color,border-color,box-shadow,transform] duration-300",
                      passwordStrength <= 1 && "w-1/4 bg-rose-500",
                      passwordStrength === 2 && "w-2/4 bg-amber-500",
                      passwordStrength === 3 && "w-3/4 bg-sky-500",
                      passwordStrength >= 4 && "w-full bg-emerald-500"
                    )}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>Сложность пароля:</span>
                  <span className="font-semibold text-foreground">
                    {passwordStrength <= 1 && "Слабый (мин. 8 симв., цифры, заглавные)"}
                    {passwordStrength === 2 && "Средний"}
                    {passwordStrength === 3 && "Надёжный"}
                    {passwordStrength >= 4 && "Отличный"}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2 pt-2">
            <input
              id="field-terms"
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-0.5 rounded border-border accent-primary cursor-pointer"
            />
            <label htmlFor="field-terms" className="text-xs text-muted-foreground leading-normal cursor-pointer select-none">
              Я принимаю условия использования и политику обработки персональных данных
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full mt-3 h-10 font-semibold gap-2 shadow-md tap-active"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" />
                <span>Создание аккаунта...</span>
              </>
            ) : (
              <>
                <span>Зарегистрироваться</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
