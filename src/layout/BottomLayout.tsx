import Checkmark from '../components/Checkmark';
import Button from '../components/Button';

export default function BottomLayout() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[540px] p-8 md:px-12 gap-8 w-full bg-white rounded-b-xl border-t border-gray-100">
            {/* Чекмарки - слева на десктопе */}
            <div className="flex flex-col gap-3">
                <Checkmark>Unlimited websites</Checkmark>
                <Checkmark>100% data ownership</Checkmark>
                <Checkmark>Email reports</Checkmark>
            </div>

            {/* Кнопка - справа на десктопе */}
            <Button>Start my trial</Button>
        </div>
    );
}
