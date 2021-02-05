type Validator = { f: (value: any) => {} } 
type Locale = {}

interface Entry {
    date: string;
    name: string;
    value: Number;
    consolidated: boolean;
}

class EntryController {
    readonly http_date_regex: RegExp = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    private response: Response;
    private responseValidator: Validator;
    private locale: Locale;
    // Checar ano válido(entre 1900 e 2099) e formatar 01/01/2021

    saveEntry(entry: Entry): void {
        // Checa se é uma entrada válida
        if(entry.name.trim() && entry.value > 0 && this.http_date_regex.test(entry.date)) {
            
        }
    }
}

