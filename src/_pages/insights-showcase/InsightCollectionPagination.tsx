import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/_components/pagination";

export type InsightCollectionPaginationProps =
  React.ComponentPropsWithoutRef<"nav">;

function InsightCollectionPagination(props: InsightCollectionPaginationProps) {
  return (
    <Pagination {...props}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            variant="text"
            shape="pill"
            color="slate"
            href="#"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            variant="text"
            shape="circle"
            size="small"
            color="slate"
            href="#"
            isActive
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            variant="text"
            shape="circle"
            size="small"
            color="slate"
            href="#"
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            variant="text"
            shape="circle"
            size="small"
            color="slate"
            href="#"
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis color="slate-600" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext variant="text" shape="pill" color="slate" href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default InsightCollectionPagination;
