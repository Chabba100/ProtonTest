import { Proton, ProtonUtil } from "@rbxts/proton";

const providers = script.Parent!.FindFirstChild("providers") as Folder

ProtonUtil.loadModules(providers)
Proton.start()