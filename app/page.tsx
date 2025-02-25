import { EffectComponent } from "./components/EffectComponent";
import State from "./state/page";

export default function Home() {
  return (
    <div className="p-8">
      <h1>Homepage</h1>
      <EffectComponent />
    </div>
  );
}
