/**
 * @file lib/playground-schemas.ts
 * @description Dynamic per-component prop schemas and code generators for AMANTLE UI Playground
 */

export type ControlConfig =
  | { type: "select"; options: { label: string; value: string }[] }
  | { type: "slider"; min: number; max: number; step: number; unit?: string }
  | { type: "boolean"; label: string }
  | { type: "color"; presets: string[] }
  | { type: "text"; placeholder?: string };

export interface PropField {
  label: string;
  description?: string;
  control: ControlConfig;
}

export interface ComponentPlaygroundSchema {
  defaultProps: Record<string, any>;
  controls: Record<string, PropField>;
  generateUsage: (props: Record<string, any>, item: { name: string; title: string; category: string }) => string;
}

export const COMPONENT_SCHEMAS: Record<string, ComponentPlaygroundSchema> = {
  button: {
    defaultProps: {
      variant: "default",
      size: "default",
      label: "Click Me",
      disabled: false,
      loading: false,
      icon: "sparkles",
    },
    controls: {
      variant: {
        label: "Вариант оформления (variant)",
        control: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Secondary", value: "secondary" },
            { label: "Outline", value: "outline" },
            { label: "Ghost", value: "ghost" },
            { label: "Link", value: "link" },
            { label: "Destructive", value: "destructive" },
            { label: "Glass", value: "glass" },
            { label: "Glow", value: "glow" },
          ],
        },
      },
      size: {
        label: "Размер (size)",
        control: {
          type: "select",
          options: [
            { label: "Small (sm)", value: "sm" },
            { label: "Default", value: "default" },
            { label: "Large (lg)", value: "lg" },
            { label: "Icon", value: "icon" },
          ],
        },
      },
      icon: {
        label: "Иконка (icon slot)",
        control: {
          type: "select",
          options: [
            { label: "Без иконки", value: "none" },
            { label: "Sparkles", value: "sparkles" },
            { label: "Arrow", value: "arrow" },
            { label: "Terminal", value: "terminal" },
            { label: "Check", value: "check" },
          ],
        },
      },
      label: {
        label: "Текст на кнопке (label)",
        control: { type: "text", placeholder: "Надпись..." },
      },
      loading: {
        label: "Спиннер загрузки",
        control: { type: "boolean", label: "Loading State" },
      },
      disabled: {
        label: "Отключенное состояние",
        control: { type: "boolean", label: "Disabled" },
      },
    },
    generateUsage: (props) => {
      const iconImport =
        props.icon === "sparkles"
          ? 'import { Sparkles } from "lucide-react";\n'
          : props.icon === "arrow"
          ? 'import { ArrowRight } from "lucide-react";\n'
          : props.icon === "terminal"
          ? 'import { Terminal } from "lucide-react";\n'
          : props.icon === "check"
          ? 'import { Check } from "lucide-react";\n'
          : "";

      const iconElement =
        props.icon === "sparkles"
          ? '      <Sparkles className="mr-2 h-4 w-4" />\n'
          : props.icon === "arrow"
          ? '      <ArrowRight className="mr-2 h-4 w-4" />\n'
          : props.icon === "terminal"
          ? '      <Terminal className="mr-2 h-4 w-4" />\n'
          : props.icon === "check"
          ? '      <Check className="mr-2 h-4 w-4 text-emerald-500" />\n'
          : "";

      const attrs: string[] = [];
      if (props.variant && props.variant !== "default") attrs.push(`variant="${props.variant}"`);
      if (props.size && props.size !== "default") attrs.push(`size="${props.size}"`);
      if (props.loading) attrs.push("loading");
      if (props.disabled) attrs.push("disabled");

      const attrsStr = attrs.length > 0 ? " " + attrs.join(" ") : "";

      return `${iconImport}import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button${attrsStr}>
${iconElement}      ${props.label || "Click Me"}
    </Button>
  );
}`;
    },
  },

  "button-magnetic": {
    defaultProps: {
      strength: 0.35,
      textParallax: true,
      variant: "default",
      size: "default",
      label: "Magnetic Action",
      disabled: false,
      icon: "sparkles",
    },
    controls: {
      strength: {
        label: "Сила притяжения (strength)",
        description: "Коэффициент смещения кнопки за курсором мыши",
        control: { type: "slider", min: 0.1, max: 0.8, step: 0.05 },
      },
      textParallax: {
        label: "Параллакс текста",
        description: "Смещение текста с задержкой для создания эффекта 3D-глубины",
        control: { type: "boolean", label: "Включить параллакс текста" },
      },
      variant: {
        label: "Вариант оформления",
        control: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Secondary", value: "secondary" },
            { label: "Outline", value: "outline" },
            { label: "Glass", value: "glass" },
            { label: "Glow", value: "glow" },
          ],
        },
      },
      size: {
        label: "Размер",
        control: {
          type: "select",
          options: [
            { label: "Small", value: "sm" },
            { label: "Default", value: "default" },
            { label: "Large", value: "lg" },
          ],
        },
      },
      label: {
        label: "Текст на кнопке",
        control: { type: "text", placeholder: "Текст..." },
      },
      disabled: {
        label: "Отключено",
        control: { type: "boolean", label: "Disabled" },
      },
    },
    generateUsage: (props) => {
      const attrs: string[] = [];
      if (props.strength !== 0.35) attrs.push(`strength={${props.strength}}`);
      if (props.textParallax === false) attrs.push("textParallax={false}");
      if (props.variant && props.variant !== "default") attrs.push(`variant="${props.variant}"`);
      if (props.size && props.size !== "default") attrs.push(`size="${props.size}"`);
      if (props.disabled) attrs.push("disabled");

      const attrsStr = attrs.length > 0 ? " " + attrs.join(" ") : "";

      return `import { ButtonMagnetic } from "@/components/ui/button-magnetic";

export default function MagneticDemo() {
  return (
    <ButtonMagnetic${attrsStr}>
      ${props.label || "Magnetic Button"}
    </ButtonMagnetic>
  );
}`;
    },
  },

  "button-ripple": {
    defaultProps: {
      duration: 600,
      rippleColor: "currentColor",
      variant: "default",
      size: "default",
      label: "Click for Ripple",
      disabled: false,
    },
    controls: {
      duration: {
        label: "Длительность волны (duration)",
        description: "Время анимации расхождения волны от точки клика",
        control: { type: "slider", min: 300, max: 1500, step: 50, unit: "ms" },
      },
      rippleColor: {
        label: "Цвет волны (rippleColor)",
        description: "Оттенок расходящегося круга",
        control: {
          type: "color",
          presets: ["currentColor", "#ffffff", "#a855f7", "#38bdf8", "#ec4899", "#10b981"],
        },
      },
      variant: {
        label: "Вариант оформления",
        control: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Secondary", value: "secondary" },
            { label: "Outline", value: "outline" },
            { label: "Destructive", value: "destructive" },
            { label: "Glass", value: "glass" },
            { label: "Glow", value: "glow" },
          ],
        },
      },
      size: {
        label: "Размер",
        control: {
          type: "select",
          options: [
            { label: "Small", value: "sm" },
            { label: "Default", value: "default" },
            { label: "Large", value: "lg" },
          ],
        },
      },
      label: {
        label: "Текст кнопки",
        control: { type: "text", placeholder: "Текст..." },
      },
      disabled: {
        label: "Отключено",
        control: { type: "boolean", label: "Disabled" },
      },
    },
    generateUsage: (props) => {
      const attrs: string[] = [];
      if (props.duration !== 600) attrs.push(`duration={${props.duration}}`);
      if (props.rippleColor && props.rippleColor !== "currentColor") attrs.push(`rippleColor="${props.rippleColor}"`);
      if (props.variant && props.variant !== "default") attrs.push(`variant="${props.variant}"`);
      if (props.size && props.size !== "default") attrs.push(`size="${props.size}"`);
      if (props.disabled) attrs.push("disabled");

      const attrsStr = attrs.length > 0 ? " " + attrs.join(" ") : "";

      return `import { ButtonRipple } from "@/components/ui/button-ripple";

export default function RippleDemo() {
  return (
    <ButtonRipple${attrsStr}>
      ${props.label || "Click for Ripple"}
    </ButtonRipple>
  );
}`;
    },
  },

  "button-shimmer": {
    defaultProps: {
      effect: "both",
      shimmerColor: "#a855f7",
      shimmerDuration: 3,
      variant: "dark",
      size: "default",
      label: "Get Access Now",
      disabled: false,
    },
    controls: {
      effect: {
        label: "Тип светового эффекта (effect)",
        description: "Луч по границе (beam), блик по поверхности (sweep) или оба",
        control: {
          type: "select",
          options: [
            { label: "Оба эффекта (Both)", value: "both" },
            { label: "Только луч (Border Beam)", value: "beam" },
            { label: "Только блик (Surface Sweep)", value: "sweep" },
          ],
        },
      },
      shimmerColor: {
        label: "Цвет луча / подсветки",
        description: "Цветовой акцент бегущего луча",
        control: {
          type: "color",
          presets: ["#a855f7", "#38bdf8", "#ec4899", "#10b981", "#f59e0b", "#ffffff"],
        },
      },
      shimmerDuration: {
        label: "Скорость вращения / sweep (секунды)",
        description: "Длительность одного полного оборота луча",
        control: { type: "slider", min: 1, max: 6, step: 0.5, unit: "s" },
      },
      variant: {
        label: "Вариант оформления",
        control: {
          type: "select",
          options: [
            { label: "Dark (SaaS Hero)", value: "dark" },
            { label: "Default", value: "default" },
            { label: "Secondary", value: "secondary" },
            { label: "Glass", value: "glass" },
            { label: "Outline", value: "outline" },
          ],
        },
      },
      size: {
        label: "Размер",
        control: {
          type: "select",
          options: [
            { label: "Small", value: "sm" },
            { label: "Default", value: "default" },
            { label: "Large (CTA)", value: "lg" },
          ],
        },
      },
      label: {
        label: "Текст кнопки",
        control: { type: "text", placeholder: "Текст..." },
      },
    },
    generateUsage: (props) => {
      const attrs: string[] = [];
      if (props.effect && props.effect !== "both") attrs.push(`effect="${props.effect}"`);
      if (props.shimmerColor && props.shimmerColor !== "hsl(var(--primary))") attrs.push(`shimmerColor="${props.shimmerColor}"`);
      if (props.shimmerDuration && props.shimmerDuration !== 3) attrs.push(`shimmerDuration="${props.shimmerDuration}s"`);
      if (props.variant && props.variant !== "dark") attrs.push(`variant="${props.variant}"`);
      if (props.size && props.size !== "default") attrs.push(`size="${props.size}"`);
      if (props.disabled) attrs.push("disabled");

      const attrsStr = attrs.length > 0 ? " " + attrs.join(" ") : "";

      return `import { ButtonShimmer } from "@/components/ui/button-shimmer";
import { Sparkles } from "lucide-react";

export default function ShimmerDemo() {
  return (
    <ButtonShimmer${attrsStr}>
      <Sparkles className="mr-2 h-4 w-4" />
      ${props.label || "Get Access Now"}
    </ButtonShimmer>
  );
}`;
    },
  },

  "button-expandable": {
    defaultProps: {
      mode: "reveal-icon",
      iconPosition: "right",
      variant: "default",
      size: "default",
      label: "Explore Ecosystem",
      disabled: false,
    },
    controls: {
      mode: {
        label: "Режим расширения (mode)",
        description: "Выезжающая иконка или раскрытие текста по ховеру",
        control: {
          type: "select",
          options: [
            { label: "Выезд иконки (Reveal Icon)", value: "reveal-icon" },
            { label: "Раскрытие текста (Reveal Text)", value: "reveal-text" },
          ],
        },
      },
      iconPosition: {
        label: "Позиция иконки",
        control: {
          type: "select",
          options: [
            { label: "Справа (Right)", value: "right" },
            { label: "Слева (Left)", value: "left" },
          ],
        },
      },
      variant: {
        label: "Вариант оформления",
        control: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Secondary", value: "secondary" },
            { label: "Outline", value: "outline" },
            { label: "Glass", value: "glass" },
            { label: "Glow", value: "glow" },
          ],
        },
      },
      size: {
        label: "Размер",
        control: {
          type: "select",
          options: [
            { label: "Small", value: "sm" },
            { label: "Default", value: "default" },
            { label: "Large", value: "lg" },
          ],
        },
      },
      label: {
        label: "Текст кнопки",
        control: { type: "text", placeholder: "Текст..." },
      },
    },
    generateUsage: (props) => {
      const attrs: string[] = [];
      if (props.mode && props.mode !== "reveal-icon") attrs.push(`mode="${props.mode}"`);
      if (props.iconPosition && props.iconPosition !== "right") attrs.push(`iconPosition="${props.iconPosition}"`);
      if (props.variant && props.variant !== "default") attrs.push(`variant="${props.variant}"`);
      if (props.size && props.size !== "default") attrs.push(`size="${props.size}"`);
      if (props.disabled) attrs.push("disabled");

      const attrsStr = attrs.length > 0 ? " " + attrs.join(" ") : "";

      return `import { ButtonExpandable } from "@/components/ui/button-expandable";

export default function ExpandableDemo() {
  return (
    <ButtonExpandable${attrsStr}>
      ${props.label || "Explore Ecosystem"}
    </ButtonExpandable>
  );
}`;
    },
  },

  "button-tilt": {
    defaultProps: {
      maxTilt: 14,
      depth: 20,
      perspective: 600,
      glare: true,
      variant: "default",
      size: "default",
      label: "3D Perspective",
      disabled: false,
    },
    controls: {
      maxTilt: {
        label: "Угол наклона (maxTilt)",
        description: "Максимальный градус поворота по осям X и Y",
        control: { type: "slider", min: 5, max: 30, step: 1, unit: "°" },
      },
      depth: {
        label: "Глубина слоя текста (depth)",
        description: "Смещение содержимого кнопки по оси Z (translateZ)",
        control: { type: "slider", min: 5, max: 40, step: 1, unit: "px" },
      },
      perspective: {
        label: "Перспектива камеры (perspective)",
        description: "Фокусное расстояние 3D пространства в пикселях",
        control: { type: "slider", min: 300, max: 1200, step: 50, unit: "px" },
      },
      glare: {
        label: "3D Блик курсора",
        description: "Световой радиальный блик, следующий за положением курсора",
        control: { type: "boolean", label: "Включить блик (Glare)" },
      },
      variant: {
        label: "Вариант оформления",
        control: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Secondary", value: "secondary" },
            { label: "Glass", value: "glass" },
            { label: "Glow", value: "glow" },
            { label: "Outline", value: "outline" },
          ],
        },
      },
      size: {
        label: "Размер",
        control: {
          type: "select",
          options: [
            { label: "Small", value: "sm" },
            { label: "Default", value: "default" },
            { label: "Large", value: "lg" },
          ],
        },
      },
      label: {
        label: "Текст кнопки",
        control: { type: "text", placeholder: "Текст..." },
      },
    },
    generateUsage: (props) => {
      const attrs: string[] = [];
      if (props.maxTilt !== 14) attrs.push(`maxTilt={${props.maxTilt}}`);
      if (props.depth !== 20) attrs.push(`depth={${props.depth}}`);
      if (props.perspective !== 600) attrs.push(`perspective={${props.perspective}}`);
      if (props.glare === false) attrs.push("glare={false}");
      if (props.variant && props.variant !== "default") attrs.push(`variant="${props.variant}"`);
      if (props.size && props.size !== "default") attrs.push(`size="${props.size}"`);
      if (props.disabled) attrs.push("disabled");

      const attrsStr = attrs.length > 0 ? " " + attrs.join(" ") : "";

      return `import { ButtonTilt } from "@/components/ui/button-tilt";

export default function TiltDemo() {
  return (
    <ButtonTilt${attrsStr}>
      ${props.label || "3D Perspective"}
    </ButtonTilt>
  );
}`;
    },
  },

  "button-group": {
    defaultProps: {
      groupType: "segmented",
      variant: "outline",
      size: "default",
      orientation: "horizontal",
      attached: true,
      label: "Сохранить проект",
    },
    controls: {
      groupType: {
        label: "Тип кнопочной группы",
        description: "Segmented Control, Split Dropdown или слитный Button Group",
        control: {
          type: "select",
          options: [
            { label: "Segmented Control", value: "segmented" },
            { label: "Split Dropdown Button", value: "split" },
            { label: "Linked Button Group", value: "group" },
          ],
        },
      },
      variant: {
        label: "Вариант кнопок",
        control: {
          type: "select",
          options: [
            { label: "Outline", value: "outline" },
            { label: "Default", value: "default" },
            { label: "Secondary", value: "secondary" },
            { label: "Glass", value: "glass" },
          ],
        },
      },
      size: {
        label: "Размер",
        control: {
          type: "select",
          options: [
            { label: "Small", value: "sm" },
            { label: "Default", value: "default" },
            { label: "Large", value: "lg" },
          ],
        },
      },
      orientation: {
        label: "Ориентация группы",
        control: {
          type: "select",
          options: [
            { label: "Horizontal", value: "horizontal" },
            { label: "Vertical", value: "vertical" },
          ],
        },
      },
      attached: {
        label: "Слитные границы (attached)",
        description: "Объединять границы кнопок без двойных линий",
        control: { type: "boolean", label: "Attached Borders" },
      },
      label: {
        label: "Текст основного действия",
        control: { type: "text", placeholder: "Название кнопки..." },
      },
    },
    generateUsage: (props) => {
      if (props.groupType === "segmented") {
        return `import { SegmentedControl } from "@/components/ui/button-group";
import { useState } from "react";

export default function SegmentedDemo() {
  const [tab, setTab] = useState("analytics");

  return (
    <SegmentedControl
      value={tab}
      onChange={setTab}
      size="${props.size || "default"}"
      options={[
        { value: "overview", label: "Overview" },
        { value: "analytics", label: "Analytics" },
        { value: "reports", label: "Reports" },
        { value: "settings", label: "Settings" },
      ]}
    />
  );
}`;
      }

      if (props.groupType === "split") {
        return `import { SplitButton } from "@/components/ui/button-group";

export default function SplitDemo() {
  return (
    <SplitButton
      variant="${props.variant || "default"}"
      size="${props.size || "default"}"
      onClick={() => console.log("Main action")}
      menuItems={[
        { label: "Сохранить и опубликовать" },
        { label: "Сохранить как черновик" },
        { label: "Удалить", destructive: true },
      ]}
    >
      ${props.label || "Сохранить проект"}
    </SplitButton>
  );
}`;
      }

      return `import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

export default function GroupDemo() {
  return (
    <ButtonGroup orientation="${props.orientation || "horizontal"}" attached={${props.attached !== false}}>
      <Button variant="${props.variant || "outline"}" size="${props.size || "default"}">Левая</Button>
      <Button variant="${props.variant || "outline"}" size="${props.size || "default"}">Центральная</Button>
      <Button variant="${props.variant || "outline"}" size="${props.size || "default"}">Правая</Button>
    </ButtonGroup>
  );
}`;
    },
  },

  badge: {
    defaultProps: {
      variant: "default",
      label: "New Feature",
    },
    controls: {
      variant: {
        label: "Вариант бейджа (variant)",
        control: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Secondary", value: "secondary" },
            { label: "Outline", value: "outline" },
            { label: "Destructive", value: "destructive" },
          ],
        },
      },
      label: {
        label: "Текст бейджа",
        control: { type: "text", placeholder: "Текст..." },
      },
    },
    generateUsage: (props) => {
      return `import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <Badge variant="${props.variant}">
      ${props.label}
    </Badge>
  );
}`;
    },
  },

  input: {
    defaultProps: {
      type: "text",
      placeholder: "Введите ваш email...",
      disabled: false,
    },
    controls: {
      type: {
        label: "Тип поля (type)",
        control: {
          type: "select",
          options: [
            { label: "Text", value: "text" },
            { label: "Email", value: "email" },
            { label: "Password", value: "password" },
            { label: "Number", value: "number" },
          ],
        },
      },
      placeholder: {
        label: "Плейсхолдер (placeholder)",
        control: { type: "text", placeholder: "Введите подсказку..." },
      },
      disabled: {
        label: "Отключено",
        control: { type: "boolean", label: "Disabled" },
      },
    },
    generateUsage: (props) => {
      return `import { Input } from "@/components/ui/input";

export default function InputDemo() {
  return (
    <Input
      type="${props.type}"
      placeholder="${props.placeholder}"${props.disabled ? "\n      disabled" : ""}
    />
  );
}`;
    },
  },
};

/**
 * Intelligent fallback schema for any component without an explicit configuration
 */
export function getComponentSchema(name: string, title: string, category: string): ComponentPlaygroundSchema {
  if (COMPONENT_SCHEMAS[name]) {
    return COMPONENT_SCHEMAS[name];
  }

  return {
    defaultProps: {
      label: title,
      variant: "default",
      disabled: false,
    },
    controls: {
      label: {
        label: "Заголовок / Метка",
        control: { type: "text", placeholder: title },
      },
    },
    generateUsage: (props, item) => {
      const compName = item.title.replace(/[\s-]+/g, "");
      return `import ${compName} from "@/registry/${item.category}/${item.name}";

export default function Demo() {
  return (
    <${compName} />
  );
}`;
    },
  };
}

