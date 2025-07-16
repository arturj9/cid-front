import { Button } from "@/components/ui/button";

interface buttonProps {
  title: string;
}

export function MyButtonDemo(props: buttonProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>{props.title}</Button>
    </div>
  );
}
