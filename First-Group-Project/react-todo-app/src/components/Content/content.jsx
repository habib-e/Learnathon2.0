import DashboardHeader from "./DashBoardHeader/dashboardHeader";
import { Profile } from "./Profile/profile";
import { TodoStatics } from "./Todo-Statics/todoStatics";


export default function Content() {
  return (
		<div className="bg-slate-600 text-white p-10 space-y-3 rounded-xl w-[90%]">
			<DashboardHeader></DashboardHeader>
      <Profile></Profile>
      <TodoStatics></TodoStatics>
			
		</div>
	)
}
