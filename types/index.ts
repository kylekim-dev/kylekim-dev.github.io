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

export type ImgShieldUrlMap = {
    techStack: TechStack;
    imgUrl: string; 
}

export type Experience = {
    displayOrder: number;
    companyName: string;
    startData: string;
    endDate: string;
    location: string;
    // isPresent: boolean;
    usedTechStacks: TechStack[]; 
    descriptions: string[];
}

export type Education = {
    displayOrder: number;
    name: string;
    startData: string;
    endDate: string;
    location: string;
    major: string;
}

export enum SkillCategory {
    BackEnd = "Back-End",
    FrontEnd = "Front-End",
    DevOps = "DevOps",
    Framework = "Framework",
    Workflow = "Workflow"
}

export enum TechStack {
    CSharp = "C#",
    Java = "Java",
    Python = "Python",
    MSSQL = "MS-SQL",
    MySQL = "My-SQL",
    HTML = "HTML4",
    CSS = "CSS3",
    Javascript = "JavaScript",
    Typescript = "TypeScript",
    React = "React",
    Next = "Next",
    VueJS = "Vue.js",
    Nuxt = "Nuxt",
    Azure = "Azure",
    AWS = "AWS",
    DotNet = ".Net",
    Spring = "Spring Boot",
    Bootstrap = "Bootstrap",
    MUI = "Material-UI",
    Vuetify = "Vuetify",
    VisualStudio = "Visual Studio",
    VSCODE = "VS-CODE",
    INTELLIJIDEA = "INTELLIJIDEA",
    GIT = "GIT",
    GITHUB = "GITHUB",
    BITBUCKET = "BITBUCKET",
    SLACK = "SLACK",
}