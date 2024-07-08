interface ContentAreaProps {
  children: React.ReactNode
}

const ContentArea = ({ children }: ContentAreaProps) => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      {children}
    </main>
  )
}

export default ContentArea
