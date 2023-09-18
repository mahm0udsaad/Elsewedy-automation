"use client"
import { projectsData } from "../data/clients"
import { Clients } from "../page"

export default function ClientsPage(){
    return(
        <main className="pt-20">
              <div style={{borderRadius:`0 20px`}} className=" redBg sm:w-1/2 mx-auto my-10">
                <h1 className="text-5xl font-semibold text-center text-white p-10">
                Our Clients
                </h1>
                </div>
                <Clients />
        </main>
    )
}