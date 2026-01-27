import { Container } from "@/components/ui/container";

type BreadcrumbStripProps = {
  items: string[];
};

export function BreadcrumbStrip({ items }: BreadcrumbStripProps) {
  return (
    <div className="w-full mt-16 lg:mt-20 bg-gradient-to-r from-white via-[#8fe6df] to-white">
      <Container>
        <div className="py-3 sm:py-4">
          <nav aria-label="Breadcrumb">
            <p className="text-sm font-medium font-sans" style={{ color: "#000000" }}>
              {items.map((item, index) => (
                <span key={`${item}-${index}`}>
                  {item}
                  {index < items.length - 1 ? (
                    <span className="mx-2 text-[#8fe6df]">/</span>
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
