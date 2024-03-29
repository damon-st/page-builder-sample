"use client";

import { EditorElement } from "@/components/providers/editor/editor-provider";
import TextComponent from "./text";
import Container from "./container";
import VideoComponent from "./video";
import LinkComponent from "./link-component";
import ContactFormComponent from "./contact-form-component";
import Checkout from "./checkout";
import ImageComponent from "./image-component";
import QuoteComponent from "./quote-component";

type Props = {
  element: EditorElement;
};

export default function Recursive({ element }: Props) {
  switch (element.type) {
    case "text":
      return <TextComponent element={element} />;
    case "__body":
      return <Container element={element} />;
    case "container":
      return <Container element={element} />;
    case "video":
      return <VideoComponent element={element} />;
    case "2Col":
      return <Container element={element} />;
    case "link":
      return <LinkComponent element={element} />;
    case "contactForm":
      return <ContactFormComponent element={element} />;
    case "paymentForm":
      return <Checkout element={element} />;
    case "image":
      return <ImageComponent element={element} />;
    case "quote":
      return <QuoteComponent element={element} />;
    default:
      return null;
  }
}
