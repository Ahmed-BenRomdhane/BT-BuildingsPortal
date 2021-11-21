import { Address } from './address.model';
import { BuildingImage } from './building-image.model';
import { Owner } from './owner.model';

export interface Building {
   totalRooms: number;
   totalViews: number;
   totalLikes: number;
   area: number;
   price: number;
   description: string;
   name: string;
   status: string;
   isFree: boolean;
   publishDate: Date;
   buildingImages: BuildingImage[];
   address: Address;
   owner: Owner;
}