interface InventoryBadgeProps {
  inventory: number;
  className?: string;
}

export default function InventoryBadge({ inventory, className = "" }: InventoryBadgeProps) {
  if (inventory <= 0) {
    return (
      <span className={`text-sm text-red-500 font-medium ${className}`}>
        Out of Stock
      </span>
    );
  }

  if (inventory <= 5) {
    return (
      <span className={`text-sm text-amber-500 font-medium ${className}`}>
        Only {inventory} left in stock
      </span>
    );
  }

  return (
    <span className={`text-sm text-green-500 font-medium ${className}`}>
      {inventory} in stock
    </span>
  );
}
