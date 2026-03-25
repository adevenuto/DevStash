import { Search, Star, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function TopBar() {
  return (
    <header className="flex h-14 items-center border-b px-6 justify-between">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search items..."
          className="pl-9 bg-muted/50 border-none"
        />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Star className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          + New Collection
        </Button>
        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
          <Plus className="mr-1 h-4 w-4" />
          New Item
        </Button>
      </div>
    </header>
  );
}
