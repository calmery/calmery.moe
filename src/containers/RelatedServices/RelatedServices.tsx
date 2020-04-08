import * as React from "react";
import { useState } from "react";
import { Logo, LogoService } from "~/components/Logo";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { HorizontalScrollViewItem } from "~/containers/HorizontalScrollViewItem";
import { RelatedServicesItem } from "~/components/RelatedServicesItem";
import styles from "./RelatedServices.scss";

export const RelatedServices: React.FC = () => {
  const [rootElement, setRootElement] = useState<HTMLDivElement | null>(null);

  return (
    <React.Fragment>
      <Logo service={LogoService.RELATED_SERVICES} />
      <HorizontalScrollView
        rootElement={(element) => setRootElement(element)}
        className={styles.container}
      >
        {rootElement && (
          <HorizontalScrollViewItem
            className={styles.item}
            rootElement={rootElement}
          >
            <RelatedServicesItem
              logoUrl="/images/related-services/camera.calmery.moe.svg"
              url="https://camera.calmery.moe"
            />
          </HorizontalScrollViewItem>
        )}
      </HorizontalScrollView>
    </React.Fragment>
  );
};
