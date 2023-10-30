export class lijsten
{
    id: null;
    lijstnaam: string;
    lijstkleur: string;
    omschrijving: string;

    constructor(id:null, lijstnaam: string, lijstkleur: string, omschrijving: string)
    {
        this.id = id;
        this.lijstnaam = lijstnaam;
        this.lijstkleur = lijstkleur;
        this.omschrijving = omschrijving;
    }
}