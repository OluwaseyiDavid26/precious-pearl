import { createClient } from "@/lib/supabase/server";

interface EventImage {
  image_url: string;
  sort_order: number;
}

interface Event {
  id: string;
  title: string;
  description: string | null;
  event_date: string | null;
  location: string | null;
  category: string;
  is_published: boolean;
  event_images: EventImage[];
}

export default async function EventsSection() {
  const supabase = await createClient();

  const { data: events } = await supabase
    .from("events")
    .select(`*, event_images(image_url, sort_order)`)
    .eq("is_published", true)
    .order("event_date", { ascending: false })
    .limit(6);

  if (!events || events.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-[#F5C400] font-bold text-xs tracking-widest uppercase mb-3">
            What We've Been Up To
          </span>
          <h2 className="text-4xl font-black text-[#0D1B5E] tracking-tight mb-4">
            Our Events
          </h2>
          <div className="w-16 h-1 rounded-full bg-[#F5C400]" />
          <p className="text-gray-500 text-sm mt-5 max-w-xl leading-relaxed">
            From community outreach to scholarship programmes, here's a look at
            what Precious Pearl Support Initiative has been doing on the ground.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            const images = [...(event.event_images ?? [])].sort(
              (a, b) => a.sort_order - b.sort_order
            );
            const cover = images[0]?.image_url;

            return (
              <div
                key={event.id}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 bg-[#0D1B5E]/5 overflow-hidden">
                  {cover ? (
                    <img
                      src={cover}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-[#0D1B5E]/10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Image count badge */}
                  {images.length > 1 && (
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-lg font-semibold">
                      +{images.length - 1} photos
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-[#0D1B5E] text-[#F5C400] text-xs font-bold px-3 py-1 rounded-lg capitalize">
                    {event.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-black text-[#0D1B5E] text-base leading-snug mb-3 line-clamp-2 group-hover:text-[#C8102E] transition-colors duration-200">
                    {event.title}
                  </h3>

                  <div className="flex flex-col gap-2 mt-auto">
                    {event.event_date && (
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <svg
                          className="w-3.5 h-3.5 text-[#F5C400] flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {new Date(event.event_date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                    )}

                    {event.location && (
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <svg
                          className="w-3.5 h-3.5 text-[#F5C400] flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {event.location}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom accent bar on hover */}
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#F5C400] to-[#C8102E] transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
