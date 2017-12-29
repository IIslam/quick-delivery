export interface PilotOrder {
    Id: string;
    PilotId: string;
    ArriveDate: string;
    ClientLang: any;
    ClientLat: any;
    DeliverCost: number;
    DeliveryAccpetedDate: Date;
    Distance: number;
    FinalDate: Date;
    OrderCost: number;
    OrderDate: Date;
    PilotPenality: number;
    ReciveDate: Date;
    ResturantPenality: number;
    ResutrantId: string;
    State: any;
}