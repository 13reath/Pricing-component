import PageLayout from './layout/PageLayout';
import HeadLayout from './layout/HeadLayout';
import PricingRange from './components/PricingRange';
import BottomLayout from './layout/BottomLayout';

export default function App() {
    return (
        <PageLayout>
            <HeadLayout />
            <PricingRange />
            <BottomLayout />
        </PageLayout>
    );
}
