import { Container } from "@/components/ui/container";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbStripProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbStrip({ items }: BreadcrumbStripProps) {
  return (
    <div className="w-full mt-16 lg:mt-20 bg-gradient-to-r from-white via-[#227774] to-white">
      <Container>
        <div className="py-3 sm:py-4">
          <nav aria-label="Breadcrumb">
            <p className="text-sm font-medium font-sans" style={{ color: "#000000" }}>
              {items.map((item, index) => (
                <span key={`${item.label}-${index}`}>
                  {item.href ? (
                    <Link href={item.href} className="hover:underline transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {index < items.length - 1 ? (
                    <span className="mx-2 text-[#227774]">/</span>
                  ) : null}
                </span>
              ))}
            </p>
          </nav>
        </div>
      </Container>
    </div>
  );
}
