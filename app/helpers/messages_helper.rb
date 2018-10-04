module MessagesHelper
    def format_posted_time(time)
        return time.strftime('%Y/%m/%d %H:%M:%S')
    end
end
