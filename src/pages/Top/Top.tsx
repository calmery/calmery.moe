import * as React from "react";
import { Counter } from "~/containers/Counter";
import { Header } from "~/components/Header";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { ShareButtons } from "~/components/ShareButtons";

export const Top: React.FC = () => (
  <React.Fragment>
    <Header />
    <HorizontalScrollView>
      <Counter />
    </HorizontalScrollView>
    <ShareButtons />
  </React.Fragment>
);
