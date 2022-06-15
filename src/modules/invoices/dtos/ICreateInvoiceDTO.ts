interface ICreateInvoiceDTO {
    department_id: string;
    issuer_id: string;
    organization_id: string;
    amount: number;
    due_date: Date;
    payment_date?: Date;
    launch_date?: Date;
    competence_month: number;
    competence_year: number;
    status_id: number;
    description?: string;
}

export { ICreateInvoiceDTO }