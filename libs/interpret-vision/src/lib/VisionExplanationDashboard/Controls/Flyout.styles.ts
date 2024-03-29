// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  IStyle,
  mergeStyleSets,
  IProcessedStyleSet,
  getTheme,
  mergeStyles
} from "@fluentui/react";
import React from "react";

export interface IFlyoutStyles {
  cell: IStyle;
  errorIcon: IStyle;
  featureListContainer: IStyle;
  iconContainer: IStyle;
  image: IStyle;
  imageContainer: IStyle;
  errorTitle: IStyle;
  successTitle: IStyle;
  label: IStyle;
  mainContainer: IStyle;
  odFlyoutContainer: IStyle;
  successIcon: IStyle;
  sectionIndent: IStyle;
  separator: IStyle;
  stackDynamicScreenSize: IStyle;
  title: IStyle;
}

export const explanationImage: React.CSSProperties = {
  position: "relative",
  right: "85"
};

export const explanationImageWidth = "700px";

export const flyoutStyles: () => IProcessedStyleSet<IFlyoutStyles> = () => {
  const theme = getTheme();
  const title: IStyle = {
    fontWeight: "600"
  };
  return mergeStyleSets<IFlyoutStyles>({
    cell: {
      marginBottom: "20px"
    },
    errorIcon: {
      color: theme.semanticColors.errorIcon,
      fontSize: "large",
      fontWeight: "600"
    },
    errorTitle: mergeStyles(title, {
      color: theme.semanticColors.errorText
    }),
    featureListContainer: {
      height: 300,
      overflow: "auto"
    },
    iconContainer: {
      position: "relative",
      top: "2px"
    },
    image: {
      height: "250px",
      marginBottom: "20px",
      width: "250px"
    },
    imageContainer: {
      maxHeight: "1500px",
      maxWidth: "1000px"
    },
    label: {
      bottom: 20,
      position: "relative",
      textAlign: "start"
    },
    mainContainer: {
      height: "100%",
      overflow: "hidden"
    },
    odFlyoutContainer: {
      height: "100%",
      overflow: "auto",
      width: "100%"
    },
    sectionIndent: {
      overflow: "hidden",
      width: "100%"
    },
    separator: {
      width: "100%"
    },
    stackDynamicScreenSize: {
      selectors: {
        "@media (max-width: 740px)": {
          alignItems: "flex-start",
          flexFlow: "column"
        }
      }
    },
    successIcon: {
      color: theme.semanticColors.successIcon,
      fontSize: "large",
      fontWeight: "600"
    },
    successTitle: mergeStyles(title, {
      color: theme.semanticColors.successIcon
    }),
    title
  });
};
