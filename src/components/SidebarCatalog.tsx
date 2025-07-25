import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface PremiumProduct {
    id: number;
    name: string;
    image: string;
}

interface SidebarCatalogProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    selectedCategory: string;
    setSelectedCategory: (value: string) => void;
    selectedBrand: string;
    setSelectedBrand: (value: string) => void;
    categories: string[];
    brands: string[];
    premiumProducts: PremiumProduct[];
    onSelectPremium: (id: number) => void;
}

const SidebarCatalog: React.FC<SidebarCatalogProps> = ({
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    categories,
    brands,
    premiumProducts,
    onSelectPremium,
}) => {
    return (
        <aside className="w-full sm:w-72 bg-white border-r min-h-screen p-4 flex flex-col gap-8">
            {/* Buscador */}
            <div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        placeholder="Buscar productos..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Filtro por marcas */}
            <div>
                <h3 className="text-md font-semibold mb-2">Filtrar por marca</h3>
                <div className="flex flex-wrap gap-2">
                    {brands.map((brand) => (
                        <Badge
                            key={brand}
                            variant={selectedBrand === brand ? 'default' : 'outline'}
                            className="cursor-pointer"
                            onClick={() => setSelectedBrand(brand)}
                        >
                            {brand}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Filtro por categorías */}
            <div>
                <h3 className="text-md font-semibold mb-2">Categorías</h3>
                <div className="flex flex-col gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`text-left px-3 py-2 rounded transition ${selectedCategory === category
                                    ? 'bg-primary text-white font-semibold'
                                    : 'hover:bg-muted'
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Productos premium */}
            <div>
                <h3 className="text-md font-semibold mb-2">Productos Premium</h3>
                <div className="flex flex-col gap-3">
                    {premiumProducts.map((prod) => (
                        <div
                            key={prod.id}
                            className="flex items-center gap-3 cursor-pointer hover:bg-muted rounded p-2"
                            onClick={() => onSelectPremium(prod.id)}
                        >
                            <img src={prod.image} alt={prod.name} className="w-10 h-10 object-cover rounded" />
                            <span className="font-medium">{prod.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default SidebarCatalog;