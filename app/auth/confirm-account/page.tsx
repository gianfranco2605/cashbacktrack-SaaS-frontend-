import ConfirmAccountForm from '@/components/auth/ConfirmAccountForm';

export default function ConfirmAccountPage() {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">
        Confirm Account Page
      </h1>
      <p className="text-3xl font-bold">
        Please check your email to confirm{' '}
        <span className="text-amber-500">your account.</span>
      </p>
      <ConfirmAccountForm />
    </>
  );
}
