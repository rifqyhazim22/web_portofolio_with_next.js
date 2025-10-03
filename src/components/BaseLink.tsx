import Link from "next/link";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

const EXTERNAL_PATTERN = /^(?:[a-z][a-z+.-]*:|(?:\/\/))/i;

type BaseLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
>;

export default function BaseLink({ href, children, ...rest }: BaseLinkProps) {
  if (EXTERNAL_PATTERN.test(href) || href.startsWith("#")) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
