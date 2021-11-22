import { Address } from './address.model';
import { BuildingImage } from './building-image.model';
import { Owner } from './owner.model';

export interface Building {
   Id: string;
   TotalRooms: number;
   TotalViews: number;
   TotalLikes: number;
   Area: number;
   Price: number;
   Description: string;
   Name: string;
   Status: string;
   IsFree: boolean;
   PublishDate: Date;
   BuildingImages: BuildingImage[];
   Address: Address;
   Owner: Owner;
}