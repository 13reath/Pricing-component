import Checkmark from '../components/Checkmark';
import Button from '../components/Button';

export default function BottomLayout() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[540px] p-8  md:px-12 gap-8 md:mb-20 mb-14 shadow-lg shadow-indigo-500/10 w-full bg-white rounded-b-xl border-t border-gray-100">
            <div className="flex flex-col gap-3">
                <Checkmark>Unlimited websites</Checkmark>
                <Checkmark>100% data ownership</Checkmark>
                <Checkmark>Email reports</Checkmark>
            </div>

            <Button>Start my trial</Button>
        </div>
    );
}
