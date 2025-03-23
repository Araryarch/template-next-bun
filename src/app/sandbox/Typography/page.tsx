import Typography from '@/components/Typography'
import { cn } from '@/lib/utils'

const fontVariants = ['Inter', 'ClashDisplay'] as const
const fontWeights = ['regular', 'medium', 'bold'] as const

const typographyVariants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  't1',
  't2',
  'bt',
  'l1',
  'l2',
] as const

export default function TypographyPage() {
  return (
    <section className="my-8 px-4 text-center">
      <Typography font="ClashDisplay" variant="h1">
        Typography Component
      </Typography>

      <table className="mt-8 min-w-[80%] border-collapse border border-[#E0E0E0] mx-auto rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="border bg-red-500 text-white-500 px-4 py-2">
              Font Variant
            </th>
            <th className="border bg-red-500 text-white-500 px-4 py-2">
              Font Weight
            </th>
            <th className="border bg-red-500 text-white-500 px-4 py-2">
              Typography Variant
            </th>
            <th className="border bg-red-500 text-white-500 px-4 py-2">
              Sample
            </th>
          </tr>
        </thead>
        <tbody>
          {fontVariants.map((fontVariant) =>
            fontWeights.map((fontWeight) =>
              typographyVariants.map((typographyVariant) => (
                <tr key={`${fontVariant}-${fontWeight}-${typographyVariant}`}>
                  <td
                    className={cn(
                      'border border-gray-300 px-4 py-2',
                      'font-' + fontWeight,
                    )}
                  >
                    {fontVariant}
                  </td>
                  <td
                    className={cn(
                      'border border-gray-300 px-4 py-2',
                      'font-' + fontWeight,
                    )}
                  >
                    {fontWeight}
                  </td>
                  <td
                    className={cn(
                      'border border-gray-300 px-4 py-2',
                      'font-' + fontWeight,
                    )}
                  >
                    {typographyVariant}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Typography
                      as="p"
                      font={fontVariant}
                      weight={fontWeight}
                      variant={typographyVariant}
                    >
                      TEDxITS
                    </Typography>
                  </td>
                </tr>
              )),
            ),
          )}
        </tbody>
      </table>
    </section>
  )
}
