import { onCleanup, createSignal } from "solid-js";
import { t } from "astro-i18n";

export const FakeComponent = () => {
  const [count, setCount] = createSignal(0);

  const interval = setInterval(() => setCount((count) => count + 1), 1000);

  onCleanup(() => clearInterval(interval));

  return (
    <div>
      Count value is {count()} {t("your_common")}
    </div>
  );
};
