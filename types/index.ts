export type User = {
    fullName: string;
    email: string;
    phone: string;
    github: string;
    linkedIn: string;
}

export type Skill = {
    category: SkillCategory;
    name: string;
    imgShieldUrl: string;
}

export type Experience = {
    companyName: string;
    startData: Date;
    endDate: Date;
    location: string;
    isPresent: boolean;
    descriptions: string[];
}

export enum SkillCategory {
    BackEnd = "Back-End",
    FrontEnd = "Front-End",
    DevOps = "DevOps",
    Framework = "Framework",
    Workflow = "Workflow"
}