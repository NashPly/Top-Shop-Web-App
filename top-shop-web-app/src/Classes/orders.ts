import { Color } from "./color";
import { Finish } from "./finish";
import { Profile } from "./profile";

export interface Orders{

    id: number;
    cust_name: string;
    phone_number: string;
    email_addr: string;
    order_date: string;
    job_name: string;

    profile: Profile;

    finish: Finish;

    color: Color;
}