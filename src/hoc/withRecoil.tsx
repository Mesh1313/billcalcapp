import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';

const withRecoil = <P extends object>(Component: React.ComponentType<P>): React.FC<P> =>
  (props) => {
    return (
      <RecoilRoot>
        <RecoilNexus />
        <Component {...props} />
      </RecoilRoot>
    );
  };

export default withRecoil;
